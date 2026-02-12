using Exercicio08;

            Autenticavel usuario = new Usuario();
            Autenticavel admin = new Administrador();

            Console.WriteLine(usuario.Autenticar("145"));  
            Console.WriteLine(admin.Autenticar("admin"));  
            Console.WriteLine(admin.Autenticar("145"));     
