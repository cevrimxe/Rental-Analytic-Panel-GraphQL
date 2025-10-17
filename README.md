# Rental Analytics Panel - GraphQL Backend

Bu proje, Pagila veritabanını kullanarak kiralama analitiği sağlayan bir GraphQL API'sidir.

## 📊 Database Hakkında

Bu projede **Pagila** sample database kullanılmaktadır. Pagila, PostgreSQL için geliştirilmiş popüler bir örnek veritabanıdır.

- **Pagila Database**: https://github.com/devrimgunduz/pagila
- **Orijinal Kaynak**: PostgreSQL Tutorial Sample Database
- **İçerik**: Film kiralama mağazası verileri (filmler, müşteriler, kiralamalar, ödemeler)

## 🚀 Kurulum

### Gereksinimler
- Docker & Docker Compose

### Tek Komutla Çalıştırma

1. **Tüm sistemi başlatın:**
```bash
docker-compose up -d
```

## 🔗 Erişim URL'leri

- **Frontend**: http://localhost:3000
- **GraphQL Playground**: http://localhost:8080
- **pgAdmin**: http://localhost:5050 (admin@admin.com / root)
- **Database**: localhost:5433 (postgres / 123456)

## 📊 Servisler

| Servis | Port | Açıklama |
|--------|------|----------|
| PostgreSQL + Pagila | 5433 | Database |
| pgAdmin | 5050 | DB Yönetimi |
| GraphQL Backend | 8080 | API |
| Next.js Frontend | 3000 | Dashboard |

## 📊 GraphQL Schema

### Ana Tipler
- **Customer**: Müşteri bilgileri
- **Store**: Mağaza bilgileri  
- **Film**: Film bilgileri
- **Rental**: Kiralama kayıtları
- **Payment**: Ödeme kayıtları

### Analytics Sorguları

#### Top Customers
En çok ödeme yapan müşteriler:
```graphql
query {
  topCustomers(limit: 10) {
    customer {
      firstName
      lastName
      email
    }
    totalSpent
    rentalsCount
  }
}
```

#### Store Revenue
Mağaza gelirleri:
```graphql
query {
  storeRevenue {
    store {
      address
    }
    totalRevenue
    rentalsCount
  }
}
```

#### Most Rented Films
En çok kiralanan filmler:
```graphql
query {
  mostRentedFilms(limit: 10) {
    film {
      title
      category
    }
    rentalsCount
    totalRevenue
  }
}
```

## 🛠️ Geliştirme

### GraphQL Playground
Sunucu çalıştığında şu adreste GraphQL Playground'a erişebilirsiniz:
```
http://localhost:8080/
```

### Schema Değişiklikleri
Schema değiştirdikten sonra kodu yeniden üretin:
```bash
gqlgen generate
```

## 📁 Proje Yapısı
```
├── database/          # Veritabanı bağlantısı
├── graph/            # GraphQL kodları
│   ├── model/        # GraphQL modelleri
│   ├── schema.graphqls  # GraphQL schema
│   ├── schema.resolvers.go  # Resolver implementasyonları
│   └── resolver.go   # Ana resolver
├── server.go         # HTTP sunucu
└── gqlgen.yml       # gqlgen konfigürasyonu
```

