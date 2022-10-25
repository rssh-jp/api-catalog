package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"api/src/domain"
)

type Resolver struct {
	userRepository domain.UserRepository
	settingUsecase domain.SettingUsecase
}

func NewResolver(userRepository domain.UserRepository, su domain.SettingUsecase) *Resolver {
	return &Resolver{
		userRepository: userRepository,
		settingUsecase: su,
	}
}
