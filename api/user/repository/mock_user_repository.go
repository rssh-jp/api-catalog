package repository

import(
    "context"

    "api/domain"
    "api/graph/model"
)

type mockUserRepository struct{
    list []*model.User
}

func NewMockUserRepository()domain.UserRepository{
    return &mockUserRepository{
        list: []*model.User{
            &model.User{ ID: "1", Name: "User1"},
            &model.User{ ID: "2", Name: "User2"},
            &model.User{ ID: "3", Name: "User3"},
            &model.User{ ID: "4", Name: "User4"},
        },
    }
}

func (ur *mockUserRepository)Fetch(ctx context.Context)([]*model.User, error){
    return ur.list, nil
}
func (ur *mockUserRepository)GetByID(ctx context.Context, id string)(*model.User, error){
    for _, item := range ur.list{
        if item.ID != id{
            continue
        }

        return item, nil
    }

    return nil, domain.ErrNotFound
}
