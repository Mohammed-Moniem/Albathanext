export interface Review {
    "id": string,
    "author": string,
    "author_details": {
        "name": string,
        "username": string,
        "avatar_path": string,
    },
    "content": string,
    "created_at": string,
}