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

4. **Pagila veritabanını kurun:**
- PostgreSQL'de `pagila` veritabanını oluşturun
- Pagila sample data'yı yükleyin

5. **Sunucuyu başlatın:**
```bash
go run server.go
```

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

## 🎯 Tamamlanan Özellikler
- ✅ Tüm resolver'lar implement edildi
- ✅ React frontend oluşturuldu
- ✅ Dashboard bileşenleri yapıldı
- ✅ Chart.js entegrasyonu
- ✅ Filtreleme özellikleri

## 🚀 Çalıştırma

### Docker ile (Önerilen)
```bash
# Önce docker-compose.yml'de DATABASE_URL'i güncelleyin
# Sonra tüm servisleri tek komutla başlatın
docker-compose up --build

# Veya Makefile kullanarak
make up
```

### Manuel Çalıştırma

#### Backend
```bash
# Veritabanı ayarlarını yapın (.env dosyası)
go run server.go
```

#### Frontend
```bash
cd frontend
npm run dev
```

## 📱 Kullanım
1. Backend: http://localhost:8080 (GraphQL Playground)
2. Frontend: http://localhost:3000 (Dashboard)

## 🔧 Geliştirme Notları
- Backend Go 1.24+ gerektirir
- Frontend Next.js 15 kullanır
- PostgreSQL Pagila veritabanı URL'i ile bağlanır
- `docker-compose.yml`'de `DATABASE_URL` ayarını yapın

## 🐳 Docker Komutları
```bash
# Servisleri başlat
make up

# Logları görüntüle
make logs

# Servisleri durdur
make down

# Veritabanını temizle
make clean

# Veritabanına bağlan
make db-shell

# Servis durumunu kontrol et
make status
```

## 📊 Örnek GraphQL Sorguları
```graphql
# En çok ödeme yapan müşteriler
query {
  topCustomers(limit: 5) {
    customer { firstName lastName }
    totalSpent
  }
}

# Mağaza gelirleri
query {
  storeRevenue {
    store { address }
    totalRevenue
  }
}
```
