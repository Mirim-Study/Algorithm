SELECT animal_type, COUNT(*) count
FROM animal_ins
GROUP BY animal_type
ORDER BY animal_type ASC;
