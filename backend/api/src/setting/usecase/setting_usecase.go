package usecase

import (
	"context"
	"io/ioutil"
	"net/http"

	"api/src/domain"
	"api/src/graph/model"
)

type settingUsecase struct {
	settings []model.SettingDetail
}

func NewSettingUsecase() domain.SettingUsecase {
	return &settingUsecase{
		settings: []model.SettingDetail{
			model.SettingDetail{
				Setting: &model.Setting{
					ID:   1,
					Name: "v3.1/webhook-example",
					URL:  "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/api-with-examples.json",
				},
				JSON: "test-json 1",
			},
			model.SettingDetail{
				Setting: &model.Setting{
					ID:   2,
					Name: "test-name 2",
					URL:  "test-url 2",
				},
				JSON: "test-json 2",
			},
			model.SettingDetail{
				Setting: &model.Setting{
					ID:   3,
					Name: "test-name 3",
					URL:  "test-url 3",
				},
				JSON: "test-json 3",
			},
		},
	}
}

func (su *settingUsecase) Fetch(ctx context.Context) ([]*model.Setting, error) {
	ret := make([]*model.Setting, 0, len(su.settings))
	for _, item := range su.settings {
		ret = append(ret, item.Setting)
	}
	return ret, nil
}
func (su *settingUsecase) GetByID(ctx context.Context, id int) (*model.SettingDetail, error) {
	var settingDetail *model.SettingDetail

	for _, item := range su.settings {
		if id != item.Setting.ID {
			continue
		}

		settingDetail = &item
		break
	}

	if settingDetail == nil {
		return nil, domain.ErrNotFound
	}

	resp, err := http.Get(settingDetail.Setting.URL)
	if err != nil {
		return nil, err
	}

	defer resp.Body.Close()

	buf, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	settingDetail.JSON = string(buf)

	return settingDetail, nil
}
