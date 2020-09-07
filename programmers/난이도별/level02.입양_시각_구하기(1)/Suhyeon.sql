SELECT EXTRACT(hour from datetime) "HOUR", COUNT(*) "COUNT" from ANIMAL_OUTS 
WHERE EXTRACT(hour from datetime) >= 9 && EXTRACT(hour from datetime) < 20
GROUP BY 1
ORDER BY 1;
