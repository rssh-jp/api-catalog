package domain

import(
    "context"

    "api/src/graph/model"
)

type UserRepository interface{
    Fetch(context.Context)([]*model.User, error)
    GetByID(context.Context, string)(*model.User, error)
}

