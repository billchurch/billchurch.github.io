import type { Patent } from '../types';

export const patents: Patent[] = [
  {
    id: 'ephemeral-auth',
    number: 'US 10,931,662',
    title: 'Methods for ephemeral authentication screening and devices thereof',
    abstract: 'This technology facilitates client certificate authentication for applications that only support password-based login. The system receives directory service authentication requests with passwords, compares them to stored passwords from previously-authenticated clients, and returns positive authentication results when matches are found.',
    issuedDate: 'February 23, 2021',
    assignee: 'F5 Networks, Inc.',
    keyFeatures: [
      'Enables client certificate authentication for password-only applications',
      'Ephemeral password database for temporary credential storage',
      'Automatic credential cleanup when sessions terminate',
      'Acts as authentication proxy for network applications'
    ],
    technicalArea: 'Network Security & Authentication',
    usptoUrl: 'https://uspto.report/patent/grant/10,931,662'
  },
  {
    id: 'cert-delegation',
    number: 'US 9,800,568',
    title: 'Methods for client certificate delegation and devices thereof',
    abstract: 'A network traffic management system that validates original certificates from client devices, extracts data from certificate fields, and generates delegate certificates signed by a certificate authority trusted by the server. This enables seamless certificate delegation in enterprise environments.',
    issuedDate: 'October 24, 2017',
    assignee: 'F5 Networks, Inc.',
    keyFeatures: [
      'Validates original client certificates',
      'Extracts and preserves certificate field data',
      'Generates trusted delegate certificates',
      'Enables certificate-based authentication delegation'
    ],
    technicalArea: 'SSL/TLS Certificate Management',
    usptoUrl: 'https://patents.google.com/patent/US9800568B1'
  }
];