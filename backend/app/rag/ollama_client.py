from ollama import Client


class OllamaClient:

    MODEL = "qwen2.5:3b"

    def __init__(self):
        self.client = Client(host="http://127.0.0.1:11434")

    def generate(self, prompt: str) -> str:

        response = self.client.chat(
            model=self.MODEL,
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
        )

        return response.message.content