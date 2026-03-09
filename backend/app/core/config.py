from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Student Management System API"
    VERSION: str = "1.0.0"
    DATABASE_URL: str = "sqlite:///./students.db"
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]
    SECRET_KEY: str = "supersecretkey"  # In production, override via env variable

    model_config = SettingsConfigDict(
        env_file=".env", env_file_encoding="utf-8", case_sensitive=True
    )


settings = Settings()
