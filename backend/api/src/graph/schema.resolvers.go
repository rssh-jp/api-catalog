package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"api/src/graph/generated"
	"api/src/graph/model"
	"context"
	"fmt"
)

// CreateTodo is the resolver for the createTodo field.
func (r *mutationResolver) CreateTodo(ctx context.Context, input model.NewTodo) (*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Todos is the resolver for the todos field.
func (r *queryResolver) Todos(ctx context.Context) ([]*model.Todo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return r.userRepository.Fetch(ctx)
}

// UsersByID is the resolver for the usersByID field.
func (r *queryResolver) UserByID(ctx context.Context, id string) (*model.User, error) {
	return r.userRepository.GetByID(ctx, id)
}

// Settings is the resolver for the settings field.
func (r *queryResolver) Settings(ctx context.Context) ([]*model.Setting, error) {
	return r.settingUsecase.Fetch(ctx)
}

// SettingDetailByID is the resolver for the settingDetailByID field.
func (r *queryResolver) SettingDetailByID(ctx context.Context, id int) (*model.SettingDetail, error) {
	return r.settingUsecase.GetByID(ctx, id)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
