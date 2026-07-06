from pathlib import Path
import shutil

from fastapi import UploadFile

from app.config.settings import settings


class FileStorage:
    @staticmethod
    async def save(file: UploadFile) -> Path:
        destination = settings.UPLOAD_DIR / file.filename

        with destination.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return destination