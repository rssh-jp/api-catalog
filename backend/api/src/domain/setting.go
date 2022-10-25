package domain

import (
	"context"

	"api/src/graph/model"
)

type SettingUsecase interface {
	Fetch(ctx context.Context) ([]*model.Setting, error)
	GetByID(ctx context.Context, id int) (*model.SettingDetail, error)
}
