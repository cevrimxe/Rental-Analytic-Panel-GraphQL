📌 Proje Fikri: Rental Analytics Paneli

Amaç:
Pagila veritabanındaki kiralama (rental), müşteri (customer), mağaza (store) ve ödeme (payment) tablolarını kullanarak analitik bir dashboard oluşturmak.
Hedef, veri üzerinden iş zekası sağlayabilmek: hangi müşteri en çok ödeme yapmış, hangi mağaza en çok gelir getirmiş, hangi filmler popüler gibi soruları cevaplamak.

1️⃣ Kullanılacak Teknolojiler
Katman	Teknoloji / Araç	Ne İçin Kullanılır
Backend	Go + gqlgen	GraphQL API oluşturmak, resolver yazmak, PostgreSQL sorgularını çalıştırmak
Veritabanı	PostgreSQL	Pagila dataset’i (film, rental, customer, store, payment tabloları)
Frontend	React / Next.js	Dashboard UI oluşturmak, GraphQL query & mutation göndermek
GraphQL Client	Apollo Client	Frontend ile GraphQL API iletişimi
Grafik & Chart	Chart.js / Recharts	Verileri görselleştirmek (bar chart, pie chart, line chart)
State Management	React Context veya Redux (opsiyonel)	UI state ve filtre yönetimi
Styling	Tailwind CSS veya Material UI	Dashboard tasarımını hızlı ve modern yapmak
2️⃣ Veri Modeli / Kullanılacak Tablolar

Customer → müşteri bilgileri

Rental → kiralanan filmler, kiralama tarihleri

Payment → ödemeler, toplam gelir

Store → mağazalar, kira ve gelir dağılımları

Film & Category → hangi filmler daha çok kiralanmış, kategorilere göre analiz

Bu tablolar birbirine foreign key ile bağlı, bu sayede analytics sorularını SQL + GraphQL ile kolay çekebilirsin.

3️⃣ Öne Çıkan Dashboard Bölümleri
🔹 Top Customers

Hangi müşteri en çok ödeme yapmış

Bar chart veya leaderboard görünümü

Filtre: belirli bir tarih aralığı

🔹 Store Revenue

Her mağazanın toplam geliri

Pie chart veya bar chart ile görselleştirme

Trendline: aylık gelir grafiği

🔹 Most Rented Films

En çok kiralanan filmler

Tablo veya horizontal bar chart

Filtre: kategoriye göre veya tarih aralığına göre

🔹 Active Rentals / Late Rentals

Şu anda kiralanmış ve geç kalan kiralamalar

Liste veya tablo görünümü

Kullanıcıya uyarı veya renk kodları ile highlight

4️⃣ GraphQL Kullanımı

Backend, PostgreSQL’den aggregation sorgularını çekip GraphQL resolver ile frontend’e sunar.

Query örnekleri (mantık olarak):

topCustomers(limit: Int, startDate: Date, endDate: Date)

storeRevenue(startDate: Date, endDate: Date)

mostRentedFilms(limit: Int)

Böylece frontend, sadece istatistik verisini GraphQL üzerinden alır ve görselleştirir.

5️⃣ UI Tasarım Önerisi

Header → filtreler (tarih aralığı, kategori, mağaza seçimi)

Left Sidebar → menü (Top Customers, Store Revenue, Most Rented Films, Active Rentals)

Main Panel → grafikler ve tablolar

Interactivity →

Filtre değişince GraphQL query otomatik güncellenir

Hover ile detay bilgisi gösterilebilir (örn. müşteri toplam ödemesi)

6️⃣ Öğrenim Kazanımları

GraphQL query ve resolver mantığını aggregation ve join ile kullanmayı öğrenirsin

PostgreSQL’de GROUP BY, SUM, COUNT gibi temel aggregation’ları pratik yaparsın

Dashboard UI ile frontend-backend entegrasyonunu gerçek bir proje ortamında öğrenirsin

Production düşünerek pagination, filtreleme, parametreli sorgular pratiği kazanırsın

Chart ve görselleştirme sayesinde data-driven UI tasarımı tecrübesi olur

📌 Özetle:
Rental Analytics Paneli, sadece veri çekmek değil, gerçek bir iş zekası dashboard'u oluşturmanı sağlar.
Hem backend hem frontend entegrasyonu öğrenmek için ideal.

## ✅ Proje Durumu - TAMAMLANDI

### Tamamlanan Özellikler:
- ✅ Go + gqlgen ile GraphQL API
- ✅ PostgreSQL Pagila veritabanı entegrasyonu
- ✅ Tüm analytics resolver'ları (TopCustomers, StoreRevenue, MostRentedFilms, ActiveRentals, LateRentals)
- ✅ Next.js + TypeScript frontend
- ✅ Apollo Client GraphQL entegrasyonu
- ✅ Chart.js ile görselleştirme (Bar, Pie charts)
- ✅ Tailwind CSS ile modern UI
- ✅ Tarih filtresi ve interaktif dashboard
- ✅ Responsive tasarım

### Kullanım:
1. **Backend**: `go run server.go` (Port: 8080)
2. **Frontend**: `cd frontend && npm run dev` (Port: 3000)
3. **GraphQL Playground**: http://localhost:8080
4. **Dashboard**: http://localhost:3000

### Öğrenilen Teknolojiler:
- GraphQL schema tasarımı ve resolver implementasyonu
- PostgreSQL aggregation sorguları (GROUP BY, SUM, COUNT)
- React hooks ile state yönetimi
- Apollo Client ile GraphQL data fetching
- Chart.js ile veri görselleştirme
- TypeScript ile tip güvenliği
- Modern UI/UX tasarım prensipleri