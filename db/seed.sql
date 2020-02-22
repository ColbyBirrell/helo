CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
)

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title varchar(45),
    img TEXT,
    content TEXT,
    author_id INT REFERENCES users(id)
)


ALTER TABLE users
ALTER COLUMN password TYPE TEXT


INSERT INTO users ( username, password, profile_pic ) VALUES ('tester1', 'abc123', 'https://robohash.org/Best%20tablet');
INSERT INTO users ( username, password, profile_pic ) VALUES ('tester2', 'abc123', 'https://robohash.org/Best%20tablet');
INSERT INTO users ( username, password, profile_pic ) VALUES ('tester3', 'abc123', 'https://robohash.org/Best%20tablet');

