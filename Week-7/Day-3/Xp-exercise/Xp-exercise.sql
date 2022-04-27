--SELECT * FROM ADDRESS



--Get a list of all film languages.
--SELECT * FROM language

--Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
--SELECT title, description,language
--FROM film
--JOIN language
--ON film.language_id = language.language_id

--Get all films, even if they don’t have languages.
--SELECT * from film

--Get all languages, even if there are no films in those languages.
--SELECT name
--FROM language
--RIGHT JOIN film 
--ON film.language_id = language.language_id

--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
--CREATE SEQUENCE new_id
--MINVALUE 1
--START WITH 1
--INCREMENT BY 1;

--CREATE TABLE new_film(
--name_id  INTEGER PRIMARY KEY DEFAULT nextval('new_id'),
--name_movie VARCHAR(255) NOT NULL
--);

--INSERT INTO new_film(name_movie)
--VALUES  ('robocop');
--INSERT INTO new_film(name_movie)
--VALUES  ('IT');
--INSERT INTO new_film(name_movie)
--VALUES ('Time');
--INSERT INTO new_film(name_movie)
--VALUES('HEAT');

--Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
--It should have the following columns:
--review_id – a primary key, non null, auto-increment.
--film_id – references the new_film table. The film that is being reviewed.
--language_id – references the language table. What language the review is in.
--title – the title of the review.
--score – the rating of the review (1-10).
--review_text – the text of the review. No limit on the length.
--last_update – when the review was last updated.


--CREATE TABLE customer_review (
--review_id INTEGER PRIMARY KEY,
--title VARCHAR(255) NOT NULL,
--review VARCHAR(255) NOT NULL,
--score SMALLINT ,
--review_text TEXT NOT NULL,
--custom_review SMALLINT REFERENCES film(film_id) ON DELETE CASCADE,
--language_review SMALLINT REFERENCES language(language_id),
--last_update timestamp
--);
--SELECT * FROM FILM


--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

--INSERT INTO customer_review (review_id,title,review,score,review_text,custom_review,last_update )
--VALUES (1,'ali forever',' bla bla bla ',3,'bla bla bla',(SELECT film_id from film WHERE title='Ali Forever'),'2022-04-04')

--SELECT * FROM film

--Delete a film that has a review from the new_film table, what happens to the customer_review table?

--DELETE FROM film WHERE title =' Ali Forever';

DELETE FROM film WHERE title='Ali Forever';
