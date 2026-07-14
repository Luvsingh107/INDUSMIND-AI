from app.config.settings import settings

from app.llm.openrouter_provider import OpenRouterProvider


class LLMFactory:

    @staticmethod
    def create():

        if settings.LLM_PROVIDER == "openrouter":
            return OpenRouterProvider()

        raise ValueError(
            f"Unknown provider: {settings.LLM_PROVIDER}"
        )