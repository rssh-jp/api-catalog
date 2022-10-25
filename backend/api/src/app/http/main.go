package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/rs/cors"

	"api/src/graph"
	"api/src/graph/generated"
	settingUsecase "api/src/setting/usecase"
	userRepo "api/src/user/repository"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	// repository
	ur := userRepo.NewMockUserRepository()

	// usecase
	su := settingUsecase.NewSettingUsecase()

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: graph.NewResolver(ur, su)}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "http://localhost:8080"},
		AllowCredentials: true,
	})

	http.Handle("/query", c.Handler(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
