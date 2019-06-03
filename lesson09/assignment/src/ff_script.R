library(jsonlite)
library(readxl)
library(dplyr)


XlImport <-  read_excel('C:/Users/ah661d/Documents/2019_ff.xlsx', sheet="values")
xl_rounded <-  XlImport %>% mutate(Value=round(Value,0))

write_json(xl_rounded, 'C:/Users/ah661d/Documents/ff.json')