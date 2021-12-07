export default function AuthHeader() {
  const { user, token } = { user: true, token: true };

  if (user && token) {
    // for Node.js Express back-end
    return {
      Token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiVVNSNSIsInVzZXJuYW1lIjoiTG9raTEyMyIsInJvbGUiOiJhZG1pbiIsImRvYiI6IjE5OTktMDEtMjZUMDA6MDA6MDAuMDAwWiIsImVtYWlsSWQiOiJsb2tpMTIzQGdtYWlsLmNvbSIsImdlbmRlciI6Ik1hbGUiLCJpZCI6IjYxYTM3OWU3NTg3ZDgyODczNTNlZTBmMSIsImFwcGxpY2F0aW9uIjoibm9kZS1hdXRoLWFwcCIsImlhdCI6MTYzODU1Njk1NiwiZXhwIjoxNjM4NjQzMzU2fQ.h5ouI82shiberRAiw_pyw3WCzuI7KWq7OVtaO4OQWCE",
    };
  } else {
    return {};
  }
}
