#http://python.projects.pgfoundry.org/
import postgresql
db = postgresql.open(user = 'postgres', host = 'localhost', port = 5432, password='pass', database='databaseName')

#note postgresql inner quotes for str must be a single('')

#select
def select(id):
	pr = db.prepare("SELECT * from table WHERE id=$1;")
	return pr(id)

#insert execute
def insertE(a,b):
	db.execute("INSERT INTO table(a,b) VALUES("+a+","+b+");")

#insert prepare
def insertP(a,b):
	pr = db.prepare("INSERT INTO table(a,b) VALUES($1,$2);")
	pr(a,b)