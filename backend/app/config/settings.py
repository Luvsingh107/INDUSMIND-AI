from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "INDUSMIND AI"

    VERSION: str = "0.1.0"

    API_PREFIX: str = "/api/v1"

    DEBUG: bool = True

    BASE_DIR: Path = Path(__file__).resolve().parent.parent.parent

    UPLOAD_DIR: Path = BASE_DIR / "uploads"

    class Config:
        env_file = ".env"


settings = Settings()

settings.UPLOAD_DIR.mkdir(parents=True, exist_ok=True)