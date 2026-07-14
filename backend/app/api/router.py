from fastapi import APIRouter

from app.api.routes.health import router as health_router

from app.api.routes import documents

from app.api.routes import search

from app.api.routes import rag

from app.api.routes import knowledge

api_router = APIRouter()

api_router.include_router(health_router)

api_router.include_router(documents.router)

api_router.include_router(search.router)

api_router.include_router(rag.router)

api_router.include_router(knowledge.router)