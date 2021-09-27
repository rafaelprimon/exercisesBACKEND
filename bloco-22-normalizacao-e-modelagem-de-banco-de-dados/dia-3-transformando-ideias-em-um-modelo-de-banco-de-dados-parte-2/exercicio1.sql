CREATE VIEW film_with_categories AS
    SELECT 
        c.name, fc.category_id, f.title
    FROM
        sakila.film_category fc
            INNER JOIN
        sakila.film f ON f.film_id = fc.film_id
            INNER JOIN
        sakila.category c ON fc.category_id = c.category_id
    ORDER BY f.title;
    