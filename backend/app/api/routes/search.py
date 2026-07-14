from fastapi import APIRouter

from app.schemas.search import SearchRequest
from app.schemas.search import SearchResponse
from app.search.search_service import SearchService

router = APIRouter(
    prefix="/search",
    tags=["Search"],
)

service = SearchService()


@router.post(
    "",
    response_model=SearchResponse,
)
async def search(request: SearchRequest):
    return service.search(
        request.query,
        request.top_k,
    )