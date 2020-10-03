SELECT ANIMAL_ID, NAME, CASE WHEN SEX_UPON_INTAKE LIKE 'Intact%' THEN 'X' 
                             ELSE 'O'
                        END 중성화
FROM ANIMAL_INS
ORDER BY 1;
