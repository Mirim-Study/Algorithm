SELECT *
FROM PLACES
WHERE host_id IN ((
    SELECT host_id
    FROM PLACES
    GROUP BY host_id
    HAVING COUNT(*) >= 2))
ORDER BY id;
