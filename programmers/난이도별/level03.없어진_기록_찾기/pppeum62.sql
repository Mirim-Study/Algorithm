SELECT animal_id, name
FROM animal_outs
MINUS
    SELECT animal_id, name
    FROM animal_ins
ORDER BY animal_id;
