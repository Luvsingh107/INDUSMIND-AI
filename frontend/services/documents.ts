import api from "./api";

export interface UploadResponse {
  filename: string;
  pages: number;
  characters: number;
  chunks: number;
  indexed: boolean;
  cleaned: boolean;
  entities: string[];
}

export async function uploadDocument(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await api.post<UploadResponse>(
    "/documents/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
}