# Sunsniffer Test

## Installation

1.  Clone the repo

    ```sh
    git clone https://github.com/Emmanuel0705/sunsniffer.git
    ```

2.  Open _src/_

    ```ssh
    Update mongo.env content (OPTIONAL)
    Rename sample.env to .env and update the content(REQUIRED),
    ```

        NOTE:
        Leave DATABASE_URL as it is (do not change the value).
        Set MONGODB_USERNAME to the value of MONGO_INITDB_ROOT_USERNAME, MONGODB_PASSWORD to the value of MONGO_INITDB_ROOT_PASSWORD and    MONGODB_DATABASE to the value of MONGO_INITDB_DATABASE

3.  open _src/seeding/_

    ```
     Update db.env content accordingly

    ```

4.  RUN

    ```sh
    docker-compose up -d --build

    ```

5.  RUN
    ```sh
    docker logs vaccine-app -f
    ```
