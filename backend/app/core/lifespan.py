from contextlib import asynccontextmanager


@asynccontextmanager
async def lifespan(app):
    print("🚀 INDUSMIND AI Backend Started")

    yield

    print("🛑 Backend Shutdown")