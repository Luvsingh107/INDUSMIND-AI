from openai import OpenAI

from app.config.settings import settings
from app.llm.base import BaseLLMProvider


class OpenRouterProvider(BaseLLMProvider):

    def __init__(self):

        self.client = OpenAI(
            api_key=settings.OPENROUTER_API_KEY,
            base_url="https://openrouter.ai/api/v1",
        )

    def generate(
        self,
        prompt: str,
    ) -> str:

        response = self.client.chat.completions.create(
            model=settings.OPENROUTER_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are INDUSMIND AI, an industrial engineering assistant. "
                        "Answer ONLY using the supplied context. "
                        "If the context does not contain the answer, clearly say so."
                    ),
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
            extra_headers={
                "HTTP-Referer": "http://localhost",
                "X-Title": "INDUSMIND AI",
            },
        )

        return response.choices[0].message.content.strip()