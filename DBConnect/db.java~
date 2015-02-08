import java.sql.*;

public class TestMySQL{

	public static void main(String[] args) {

		try{
			//driver for your DB
			Class.forName("com.mysql.jdbc.Driver");
		
			Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/DBNAME","USERNAME","PASSWORD");

			Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_UPDATABLE);

			stmt.execute("ALTER TABLE table ADD t integer");
			ResultSet rs = stmt.executeQuery("select * from table");
			//execute on each rows
			while(rs.next()) {
				System.out.print(rs.getInt(1));
				System.out.print(" ");
				System.out.println(rs.getString(2));
			}
			rs.close();
			stmt.close();
			conn.close();
		}
		catch(SQLException sqlEx){
			System.out.println("Connection");
		}
		catch(ClassNotFoundException cnfe){
			System.out.println("Driver");
		}
	}
}

