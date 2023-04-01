<%@page language="java" import="java.sql"%>

<%

// variaveis para o banco de dados
String banco    = "aula";
String endereco = "jdbc:mysql://localhost:3306/" + banco ;
String usuario  = "root" ;
String senha    = "" ;

String driver = "com.mysql.jdbc.Driver";

Class.forName(driver);

Connection conexao;
//coneção com o banco
conexao = DriverManager.getConnection(endereco,usuario,senha);

String sql ="SELECT * FROM alunos";

PreparedStatement stm = conexao.prepareStatement(sql);

ResultSet dados = stm.executeQuery();

out.print("<table>");
out.print("<tr>");
out.print("<td>Codigo</td>")

while (dados.next())
{
    out.print(dados.getString("codigo"));
    out.print(dados.getString("nome"));
    out.print(dados.getString("idade"));
    out.print(dados.getString("email"));
}

%>

