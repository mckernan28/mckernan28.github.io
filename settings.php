<?php include 'menuBarTop.php'?>
<?php include 'menuBarBottom.php'?>

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
                                <div class="btn edit" id="edit-profile-picture-button">
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

<?php include 'footer.php'?>