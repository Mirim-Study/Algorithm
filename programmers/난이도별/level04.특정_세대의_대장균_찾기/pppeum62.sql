SELECT
    G3.ID
FROM
    (
        SELECT
            G2.ID
        FROM
            ECOLI_DATA G1
            , ECOLI_DATA G2
        WHERE
            G1.PARENT_ID IS NULL
            AND G1.ID = G2.PARENT_ID
    ) G2
    , ECOLI_DATA G3
WHERE
    G2.ID = G3.PARENT_ID
ORDER BY
    G3.ID
;
