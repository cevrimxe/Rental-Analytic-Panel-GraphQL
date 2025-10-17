package database

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/lib/pq"
)

var DB *sql.DB

// InitDB PostgreSQL bağlantısını başlatır
func InitDB() {
	var err error

	// DATABASE_URL çevre değişkenini al (Docker'dan gelecek)
	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		log.Fatal("DATABASE_URL çevre değişkeni bulunamadı!")
	}

	log.Printf("DATABASE_URL: '%s'", databaseURL)

	DB, err = sql.Open("postgres", databaseURL)
	if err != nil {
		log.Fatal("Veritabanı bağlantısı açılamadı:", err)
	}

	// Bağlantıyı test et
	err = DB.Ping()
	if err != nil {
		log.Fatal("Veritabanına ping atılamadı:", err)
	}

	log.Println("PostgreSQL veritabanına başarıyla bağlandı!")
}

// CloseDB veritabanı bağlantısını kapatır
func CloseDB() {
	if DB != nil {
		DB.Close()
	}
}
