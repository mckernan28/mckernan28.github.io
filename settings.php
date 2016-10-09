<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="UTf-8">
    <title>James Mckernan</title>
    <link rel="stylesheet" href="style.css"/>
    <script src="jquery3.1.0.js"></script>
    <script src="script.js"></script>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon"
          type="image/png"
          href="MinecraftHeads/mckernan28-avatar.png">
    <link rel="apple-touch-icon" href="MinecraftHeads/mckernan28-avatar.png"/>
    <link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">
</head>
<body>
    <div class="banner-container">
        <div class="banner-container-left">
            <a class="logo-link" href="index.php">
                <img src="logo-small.png" alt="" class="banner-logo">
            </a>
        </div>
        <div class="banner-container-right">
            <p class="banner-phrase">THE ONE AND ONLY!</p>
        </div>
    </div>

    <div class="menu-bar pic-menu">
        <div class="menu-bar-left-container">

        </div>
        <div class="menu-bar-right-container">
            <div class="hamburger-container">
                <a class="hamburger" href="#">
                    <div class="bun top"></div>
                    <div class="meat"></div>
                    <div class="bun bottom"></div>
                </a>
            </div>
        </div>
    </div>

    <div class="dropdown-menu-container">
        <div class="dropdown-menu">
            <div class="profile-overview-menu-settings-container">
                <div class="profile-overview-menu-settings">
                    <div class="img-container">
                        <img class="profile-picture-menu-settings" src="mckernan28-avatar.png" alt="">
                        <a class="profile-name-menu-settings" href="#">James Mckernan</a>
                        <a class="profile-username-menu-settings" href="#">@Mckernan28</a>
                    </div>
                </div>
            </div>
            <div class="settings-menu-settings-container">
                <div class="dropdown-menu-settings">
                    <ul class="dropdown-menu-settings-link-container">
                        <li>
                            <a class="dropdown-menu-settings-link" href="index.php">Home</a>
                        </li>
                        <li>
                            <a class="dropdown-menu-settings-link" href="settings.php">Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-menu-settings-link" href="#">Help</a>
                        </li>
                        <li>
                            <a class="dropdown-menu-settings-link" href="#">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="page-container">
        <div class="banner-container-compensator"></div>
        <div class="settingspage">

            <div class="left-column">
                <div class="profile-overview-settings-container">
                    <div class="profile-overview-settings">
                        <div class="setting-headers-container">
                            <p class="setting-headers">Profile Overview</p>
                        </div>
                        <div class="profile-overview-settings-picture-container">
                            <img src="mckernan28-avatar.png" alt="profile-picture" class="profile-overview-settings-picture">
                        </div>
                        <a id="profile-overview-settings-name" href="">James Mckernan</a>
                        <a id="profile-overview-settings-username" href="">@mckernan28</a>
                        <p id="profile-overview-settings-description">Hello my name is James Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017s Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017</p>
                    </div>
                </div>
            </div>

            <div class="right-column">
                <div class="profile-settings-container">
                    <div class="profile-settings">
                        <div class="setting-headers-container">
                            <p class="setting-headers">Settings</p>
                        </div>
                        <form id="settings-form" action="" onsubmit="return false;">
                            <div id="edit-profile-picture-container">
                                <p class="settings-titles">Profile Picture:</p>
                                <div id="profile-preview-settings-picture-container">
                                    <img src="mckernan28-avatar.png" alt="Preview" id="profile-preview-settings-picture">
                                </div>
                                <div class="btn" id="edit-profile-picture-button">
                                    <input id="upload" type="file"/>
                                    <a href="" id="upload_link">upload <i class="fa fa-camera" aria-hidden="true"></i></a>
                                </div>
                            </div>

                            <div id="edit-description-container">
                                <p class="settings-titles">Description:</p>
                                <p data-editable id="current-description">Hello my name is James Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017s Mckernan I am 16 years old and I am in Sec. 5 at Heritage Regional Highschool. I am enrolled in a computer programming course called iCan for my fifth year in 2016-2017</p>
                                <div id="edit-container">
                                    <button type="button" class="btn edit" id="edit-description-button">edit</button>
                                </div>
                            </div>

                            <div id="edit-username-container">
                                <p class="settings-titles">Username:</p>
                                <p data-editable id="current-username">@mckernan28</p>
                                <div id="edit-username-container">
                                    <i class="fa fa-pencil edit" id="edit-username" aria-hidden="true"></i>
                                </div>
                            </div>

                            <div id="username-edit-input" class="hidden">
                                <input class="btn save-button" type="submit" value="Save">
                                <input id="cancel-settings-edit" class="btn cancel-button" type="button" value="Cancel">
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
    </div>

    <div class="footer-container">
        <div class="footer">
            <p class="footer-text"> Copyright 2016 by James Mckernan. All Rights Reserved. Powered by &copy MrMckernan28.</p>
        </div>
    </div>
</body>
</html>