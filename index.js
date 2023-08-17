// Qualifying test for Junior Document Generation Specialist role
const data = {
  DataProvider: {
    signer: "blah",
    registeredAgent: {
      user: {
        name: "Paul Roberts",
        email: "paul@dasifhaewf.com",
      },
      address: "5 Street Lane",
      identityId: "50f98f3jdidedeuwii0bcc1",
    },
    effectiveDate: "2023-05-23T17:17:40.180Z",
    withImmediateEffect: false,
    coyIds: ["abc", "def", "ghi", "klm"],
    global: {
      positions: [
        {
          _id: "12345",
          type: "DIRECTOR",
          profile: {
            name: "John Doe",
            email: "johndoe@gmail.com",
          },
        },
        {
          _id: "23456",
          type: "DIRECTOR",
          profile: {
            name: "James Smith",
            email: "jimmy@smith.com",
          },
        },
        {
          _id: "34567",
          type: "DIRECTOR",
          profile: {
            name: "Robert Johnson",
            email: "robert@johnson.com",
          },
        },
        {
          _id: "45678",
          type: "DIRECTOR",
          profile: {
            name: "Emily Brown",
            email: "emily@brown.com",
          },
        },
        {
          _id: "56789",
          type: "SHAREHOLDER",
          profile: {
            name: "Sarah Davis",
            email: "sarah.davis@example.com",
          },
        },
        {
          _id: "67890",
          type: "SHAREHOLDER",
          profile: {
            name: "Michael Wilson",
            email: "michael.wilson@example.com",
          },
        },
        {
          _id: "78901",
          type: "SHAREHOLDER",
          profile: {
            name: "Emma Thompson",
            email: "emma@thompson.com",
          },
        },
        {
          _id: "89012",
          type: "DIRECTOR",
          profile: {
            name: "Daniel Johnson",
            email: "daniel@johnson.com",
          },
        },
        {
          _id: "90123",
          type: "SHAREHOLDER",
          profile: {
            name: "Oliver Taylor",
            email: "oliver@taylor.com",
          },
        },
        {
          _id: "01234",
          type: "SHAREHOLDER",
          profile: {
            name: "Sophia Martinez",
            email: "sophia@example.com",
          },
        },
        {
          _id: "12340",
          type: "SHAREHOLDER",
          profile: {
            name: "Benjamin Williams",
            email: "ben@williams.com",
          },
        },
        {
          _id: "23401",
          type: "SHAREHOLDER",
          profile: {
            name: "Lucas Brown",
            email: "lucas@brown.com",
          },
        },
        {
          _id: "34012",
          type: "SHAREHOLDER",
          profile: {
            name: "Mia Davis",
            email: "mia@example.com",
          },
        },
      ],
      departments: [
        {
          _id: "001",
          name: "Marketing",
          head: {
            name: "Alice Thompson",
            email: "alice@example.com",
          },
          employees: 30,
        },
        {
          _id: "002",
          name: "Human Resources",
          head: {
            name: "Bob Johnson",
            email: "bob@johnson.com",
          },
          employees: 20,
        },
        {
          _id: "003",
          name: "Finance",
          head: {
            name: "Charlie Brown",
            email: "charlie@brown.com",
          },
          employees: 25,
        },
      ],
    },
    shareholdings: [1000, 500, 800, 1200, 750, 950, 1100, 650],
    companyDetails: {
      name: "Fictitious Company",
      address: "123 Fictitious Lane",
      industry: "Information Technology",
      established: "2000-01-01T00:00:00.000Z",
      employees: 200,
      revenue: 1000000,
    },
    products: [
      {
        name: "Product A",
        category: "Software",
        launchDate: "2005-06-01T00:00:00.000Z",
        price: 100,
      },
      {
        name: "Product B",
        category: "Hardware",
        launchDate: "2010-06-01T00:00:00.000Z",
        price: 200,
      },
    ],
    businessOperations: {
      locations: ["New York", "San Francisco", "London", "Berlin", "Sydney"],
      partners: [
        {
          name: "Partner Company A",
          address: "456 Partner Street",
          industry: "Finance",
          contact: {
            name: "David Williams",
            email: "david@partnerA.com",
          },
        },
        {
          name: "Partner Company B",
          address: "789 Partner Avenue",
          industry: "Manufacturing",
          contact: {
            name: "Evelyn Davis",
            email: "evelyn@partnerB.com",
          },
        },
      ],
      competitors: ["Competitor Company A", "Competitor Company B"],
    },
  },
};

// Please answer the following questions with reference to the provided file `data.json`.

// 1. Write a JS expression that returns the number of DIRECTORS.
const numberOfDirectors = data.DataProvider.global.positions.filter(
  (position) => position.type === "DIRECTOR"
).length;
console.log(numberOfDirectors);
// 2. Write a JS expression that returns the number of SHAREHOLDERS.
const numberOfShareholders = data.DataProvider.global.positions.filter(
  (position) => position.type === "SHAREHOLDER"
).length;
console.log(numberOfShareholders);
// 3. Write a JS expression that lists the full names of all position holders.
const positionholderNames = data.DataProvider.global.positions.map(position => position.profile.name);
console.log(positionholderNames);
// 4A. Is Product B hardware or software?

// 4B. Does Product A have a price of “100”?

// 4C. Is the launch date of Product B the 6th January 2010?

// 5. Write a JS expression that prints the effective date formatted in YYYY-MMM-DD format.

// 6. What is the JSON address in object notation that stores Robert Johnson’s email address?

// 7. Write a JS expression that returns an array of all unique email domains of the position holders.

// 8. Write a JS expression that returns an array of objects containing the names and email addresses of all DIRECTORS.

// 9. Write a JS function that takes an email domain as a parameter and returns an array of objects containing the names, email addresses, and corresponding _id of all position holders whose email addresses belong to the specified domain.

// 10. Write a JavaScript function that returns an array of objects containing the names and email addresses of the top 3 shareholders with the highest number of shares. The function should only consider shareholders whose email addresses belong to the “example.com” domain.
// To determine the top shareholders, consider the following criteria:
// The number of shares held by each shareholder is stored in a separate array called “shareholdings”, you need to correlate this with the “global.positions” array.
// The order of shareholders in the “global.positions” array corresponds to the order of their shareholdings in the “shareholdings” array.
// The length of the “shareholdings” array is equal to the number of shareholders.

// Data.json contents:
