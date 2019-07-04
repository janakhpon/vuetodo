<template>
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top custom-bg-dark">
            <router-link to="/" class="navbar-brand">
                <img style="max-height:25px;" src="../assets/logo.png" /> Task Manager
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link" exact>
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/list" class="nav-link" exact>
                            List
                        </router-link>
                    </li>
                                        <li class="nav-item">
                        <router-link to="/display" class="nav-link" exact>
                            Display
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/create" class="nav-link" exact>
                            Create
                        </router-link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
  

    export default {
        name: 'Navbar',
        methods: {
            
        }
    }
</script>
