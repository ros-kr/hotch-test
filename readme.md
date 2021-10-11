Notch code interview
Background
Welcome to Notch! We're excited to meet you! The goal for this coding exercise is for us to see your basic coding skills: - Understanding requirements - Implementing code that works - Code maintainability - Separation of architectural layers

Also, it's a starting point for technical discussions. Things like: - Why did you choose library X? - How would you implement Y? - What would you do if you had more time?

The most important thing is to finish in time with working code. Maintainability and cleanliness come afterwards.

The exercise instructions are deliberately partially detailed. For example, we don't always define what is considered a Bad Request. When information is missing, use your common sense and make your best guess. Document your decision so we can discuss it later.

Good luck!

Technologies for implementation
Please write this code in node.js + Typescript. You can choose whichever REST framework your desire. You can choose whichever frontend code you desire.

General instructions
You will create a REST server that returns information from the Wikipedia website.

Your server must run locally on port 3000. Our tests expect such a server to be up and running. Please provide instructions for how to run your server from your source code (e.g npm install && PORT=3000 npm start).

This exercise consists of parts. Make sure you're completely done with each part before moving on to the next. As a tip, you're advised to make a different commit/branch for every part to make sure you have a stable, working version for each part.

Make sure you don't get stuck on understanding the instructions! We want to see how you code and think. If we happen to use a term you don't recognize, or if the instructions are not clear- just ask. We want to help you be at your best.

Exercise
Part A
Create a REST server with the GET endpoint /introduction/<articleName> where article is the name of a Wikipedia article. The server should return the contents of the first paragraph of the corresponding wikipedia article. The returned type should be:

{ scrapeDate: number, articleName: string, introduction: string}

Where the scrapeDate is the date when the request was made, in the format of UNIX epoch (milliseconds since 1970/01/01 00:00 UTC).

For example, if I make a GET request to /introduction/cat, I should receive a response that looks roughly like this:

{
  'scrapeDate': 123123123,
  'articleName': 'cat',
  'introduction': 'The cat (Felis catus) is a domestic species of small carnivorous mammal.[1][2] It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.[4] A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.[5] Domestic cats are valued by humans for companionship and their ability to hunt rodents. About 60 cat breeds are recognized by various cat registries.[6]'
}
You main only accept article names that are comprised of letters, hyphens (-), underscores (_) and numbers. Any input that does not comply with this request should be rejected with a Bad Request response and a proper explanation for the rejection.

Part B
We want to add a language functionality to the server. Requests may arrive with a standard Accept-Language header. Make sure you respect that header and fetch the article in the correct language. For example, if I want the French article for "dog", I would send a GET request to /introduction/chien with the header Accept-language: fr. Note- the user needs to know the correct name of the article in the language they want.

Part C
Our users don't want to keep adding the language header every time they make a request - they want the system to remember their favorite language! In this part you'll implement a type of "signup" and "user preferences" system. You don't need to use an external DB for this, it's okay to keep everything in the process's memory. However, it is very important to us that you write the code in a way that makes it easy to add support for a DB afterwards. Really think about the separation of code layers here.

C.1
You are to implement a new POST endpoint: /user. The expected payload is: {userName: string, language: string}. The expected response is {token: string}. For example, if I make a POST request to /user with the payload {'userName': 'jake', 'language': 'en'} I should get the response {'token': 'abcd-1234-defa-5678'}.

The token should be a random, hard to guess string. NOTE- don't implement a JWT system here, or any other cryptographic system. The token is just a random hard to guess string.

C.2
Add support for authentication with a token to the GET endpoint: The server should look at the x-authentication header. If the header exists, the server should take the header's value and check if it's a valid token. If so, it should make the GET request using the user's favorite language.

Part D
Implement very simple web UI that allows signing up new users and fetching article introductions as those users. It should have 2 parts: 1. A signup form with a username and language fields. When signing up, it displays the auth token to the user. 2. A "Fetch article introduction" form that has a mandatory "article name" field, and optional "token", "language" fields.

This UI does not have to be pretty - it just needs to work. We're looking to see clean usage of HTML and JS.