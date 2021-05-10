
        <?php
        
        if(isset($_POST['email']) && !empty($_POST['email'])){
            //Variáveis
            $nome = addslashes($_POST['nome']);
            $email = addslashes($_POST['email']);
            $telefone = addslashes($_POST['telefone']);
            $mensagem = addslashes($_POST['mensagem']);
            $data_envio = addslashes(date('d/m/Y'));
            $hora_envio = addslashes(date('H:i:s'));            
        
            
            //Emails para quem será enviado o formulário
            $destino = "isaacelias1110@gmail.com";
            $assunto = "Orçamento da fotografia";
        
        
            //Compo E-mail
            $arquivo = "
                <html>
                <p><b>Nome: </b>$nome</p>
                <p><b>E-mail: </b>$email</p>
                <p><b>Telefone: </b>$telefone</p>
                <p><b>Mensagem: </b>$mensagem</p>
                <p>Este e-mail foi enviado em <b>$data_envio</b> às <b>$hora_envio</b></p>
                </html>
            ";
        
            //Este sempre deverá existir para garantir a exibição correta dos caracteres
            $headers  = "MIME-Version: 1.0\n";
            $headers .= "Content-type: text/html; charset=iso-8859-1\n";
            $headers .= "From: $nome <$email>";
        
            //Enviar
            if(mail($destino, $assunto, $arquivo, $headers)) {

                echo("Email enviado com sucesso!");
            }
            
            else {
                echo("Erro ao tentar enviar o email!");
            }
            
            echo "<meta http-equiv='refresh' content='10;URL=../louzeiro.php'>";
        
        
        
        
        }