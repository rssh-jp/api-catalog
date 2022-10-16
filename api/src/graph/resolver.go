package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import(
    "api/src/domain"
)

type Resolver struct{
    userRepository domain.UserRepository
}

func NewResolver(userRepository domain.UserRepository)*Resolver{
    return &Resolver{
        userRepository: userRepository,
    }
}

