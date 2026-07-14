from openai import OpenAI

from app.config.settings import settings

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=settings.OPENROUTER_API_KEY,
)

response = client.chat.completions.create(
    model=settings.OPENROUTER_MODEL,
    messages=[
        {
            "role": "user",
            "content": "Reply ONLY with SUCCESS"
        }
    ],
    extra_headers={
        "HTTP-Referer": "http://localhost",
        "X-Title": "INDUSMIND AI",
    },
)

print(response.choices[0].message.content)