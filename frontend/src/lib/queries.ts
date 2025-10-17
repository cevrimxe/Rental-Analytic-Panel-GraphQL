import { gql } from '@apollo/client';

export const GET_TOP_CUSTOMERS = gql`
  query GetTopCustomers($limit: Int, $startDate: Time, $endDate: Time) {
    topCustomers(limit: $limit, startDate: $startDate, endDate: $endDate) {
      customer {
        id
        firstName
        lastName
        email
      }
      totalSpent
      rentalsCount
    }
  }
`;

export const GET_STORE_REVENUE = gql`
  query GetStoreRevenue($startDate: Time, $endDate: Time) {
    storeRevenue(startDate: $startDate, endDate: $endDate) {
      store {
        id
        address
      }
      totalRevenue
      rentalsCount
    }
  }
`;

export const GET_MOST_RENTED_FILMS = gql`
  query GetMostRentedFilms($limit: Int, $category: String) {
    mostRentedFilms(limit: $limit, category: $category) {
      film {
        id
        title
        description
        category
      }
      rentalsCount
      totalRevenue
    }
  }
`;

export const GET_ACTIVE_RENTALS = gql`
  query GetActiveRentals {
    activeRentals {
      id
      rentalDate
      returnDate
      isLate
      customer {
        firstName
        lastName
        email
      }
      film {
        title
        category
      }
      store {
        address
      }
    }
  }
`;

export const GET_LATE_RENTALS = gql`
  query GetLateRentals {
    lateRentals {
      id
      rentalDate
      returnDate
      isLate
      customer {
        firstName
        lastName
        email
      }
      film {
        title
        category
      }
      store {
        address
      }
    }
  }
`;

export const GET_DASHBOARD_STATS = gql`
  query GetDashboardStats($startDate: Time, $endDate: Time) {
    totalRevenue(startDate: $startDate, endDate: $endDate)
    totalCustomers
    totalFilms
  }
`;
