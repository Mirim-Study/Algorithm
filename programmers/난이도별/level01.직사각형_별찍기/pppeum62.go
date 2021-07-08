package main

import "fmt"

func main() {
    var a, b int
    fmt.Scan(&a, &b)
    
    for i := 0; i < b; i++ {
        for j := 0; j < a; j++ {
            fmt.Print("*")
        }
        fmt.Println()
    }
}
