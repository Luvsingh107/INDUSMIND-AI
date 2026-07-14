from pathlib import Path
from dotenv import load_dotenv
import os

BASE_DIR = Path(__file__).resolve().parent.parent.parent

load_dotenv(BASE_DIR / ".env")


class Settings:

    APP_NAME = "INDUSMIND AI"

    VERSION = "1.0.0"

    BASE_DIR = BASE_DIR

    UPLOAD_DIR = BASE_DIR / "uploads"

    OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

    OPENROUTER_MODEL = os.getenv(
        "OPENROUTER_MODEL",
        "google/gemma-3-4b-it:free",
    )

    LLM_PROVIDER = os.getenv(
        "LLM_PROVIDER",
        "openrouter",
    )


settings = Settings()

settings.UPLOAD_DIR.mkdir(
    exist_ok=True,
)