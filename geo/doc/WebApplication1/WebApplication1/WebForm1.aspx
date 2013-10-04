<%@ Page language="c#" Codebehind="WebForm1.aspx.cs" AutoEventWireup="false" Inherits="CSharpUpload.WebForm1" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
  <HEAD>
    <title>WebForm1</title>
    <meta name="GENERATOR" Content="Microsoft Visual Studio 7.0">
    <meta name="CODE_LANGUAGE" Content="C#">
    <meta name=vs_defaultClientScript content="JavaScript">
    <meta name=vs_targetSchema content="http://schemas.microsoft.com/intellisense/ie5">
    <script type="text/javascript" src="Scripts/jquery-1.7.1.min.js"></script>
    <script type="text/javascript">
        function cargado() {
            //procesar JSON de respuesta
            alert($("#oculto").contents().find("body").html());

        }
    </script>
  </HEAD>
  <body MS_POSITIONING="GridLayout">

    <form id="Form1" method="post" enctype="multipart/form-data" runat="server" target="oculto">


        <input type="text" name="nombre" />
        <INPUT type=file id="file" name="file" runat="server" >
        <br>
        <input type="submit" id="Submit1" value="Upload" runat="server" NAME="Submit1">


    </form>
    
    <iframe name="oculto" id="oculto" onload="cargado()">
	</iframe>

  </body>
</HTML>