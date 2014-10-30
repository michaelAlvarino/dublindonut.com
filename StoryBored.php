<!DOCTYPE HTML>

<html>
<html>
  <head>
    <title>StoryBored</title>
    <link rel="stylesheet" href="Content/bootstrap.css">
    <link rel="stylesheet" href="Content/storybored.css">
  </head>

<body>
  <div class="nav">
    <div class="container">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="web-project.html">Web Project</a></li>
        <li><a href="http://dublindonut.tumblr.com">Blog</a></li>
        <li><a href="http://dublindonut.tumblr.com/aboutus">About Us</a></li>
      </ul>
    </div>
  </div>

  <div class="intro">
    <div class="container">
      <h1>StoryBored</h1>
      <p>"There is a time for reciting poetry and a time for fists"</p>
      <p></p>
    </div>
  </div>

  <div class="welcome">
    <div class="container">
    <h1>Welcome!</h1>
    <p>StoryBored is a place where you post anonymous short-stories and poems. Write a sentence, write a few words, it really doesn't matter. Just share and keep it under 500 characters.</p>
    <p>If you need some inspiration try <a href="http://www.mcsweeneys.net/articles/thirteen-writing-prompts">McSweeney's</a> or <a href="http://www.reddit.com/r/WritingPrompts/">Reddit</a></p>
    </div>
  </div>

  <div class="text-stuff">
    <div class="container">
      <h1>Type something</h1>
      <h3>Or, don't type anything at all</h3>
      <form action="db/poemInfo.php" method="POST" class="ajax">
        <div class="form-group">
          <textarea name="poem" class="form-control status-box" rows="4" placeholder="Write me a poem or short story in 500 characters"></textarea>
        </div>
        <div class="button-group">
          <p class="counter">500</p>
          <input type="submit" href="#" class="btn btn-primary"></input>
        </div>
      </form>
        <h2>Stories and Poems</h2>
        <div>
        <ul class="posts">
          <li><?php
          	include('db/mysqli_connect.php');
          	$query = "SELECT poem FROM Poem p JOIN ( SELECT FLOOR(MIN(mx.poem_pk) + RAND() * (MAX(mx.poem_pk)-MIN(mx.poem_pk))) AS max_id FROM poems mx ) m ON m.max_id = p.poem_pk";
            $result = mysqli_query($conn,$query);
            $followingdata = $result->fetch_assoc();
            echo $followingdata["poem"];
          ?></li>
          <li><?php
            include('db/mysqli_connect.php');
            $query = "SELECT poem FROM Poem p JOIN ( SELECT FLOOR(MIN(mx.poem_pk) + RAND() * (MAX(mx.poem_pk)-MIN(mx.poem_pk))) AS max_id FROM poems mx ) m ON m.max_id = p.poem_pk";
            $result = mysqli_query($conn,$query);
            $followingdata = $result->fetch_assoc();
            echo $followingdata["poem"];
          ?></li>
          <li><?php
            include('db/mysqli_connect.php');
            $query = "SELECT poem FROM Poem p JOIN ( SELECT FLOOR(MIN(mx.poem_pk) + RAND() * (MAX(mx.poem_pk)-MIN(mx.poem_pk))) AS max_id FROM poems mx ) m ON m.max_id = p.poem_pk";
            $result = mysqli_query($conn,$query);
            $followingdata = $result->fetch_assoc();
            echo $followingdata["poem"];
          ?></li>
          <li><?php
            include('db/mysqli_connect.php');
            $query = "SELECT poem FROM Poem p JOIN ( SELECT FLOOR(MIN(mx.poem_pk) + RAND() * (MAX(mx.poem_pk)-MIN(mx.poem_pk))) AS max_id FROM poems mx ) m ON m.max_id = p.poem_pk";
            $result = mysqli_query($conn,$query);
            $followingdata = $result->fetch_assoc();
            echo $followingdata["poem"];
          ?></li>
          <li><?php
            include('db/mysqli_connect.php');
            $query = "SELECT poem FROM Poem p JOIN ( SELECT FLOOR(MIN(mx.poem_pk) + RAND() * (MAX(mx.poem_pk)-MIN(mx.poem_pk))) AS max_id FROM poems mx ) m ON m.max_id = p.poem_pk";
            $result = mysqli_query($conn,$query);
            $followingdata = $result->fetch_assoc();
            echo $followingdata["poem"];
          ?></li>
        </ul>
      </div>
  </div>

  <div class="footer">
    <a href="http://dublindonut.tumblr.com"><img src="Content/Images/tumblr-l.png"></img></a>
  </div>

<script src="Scripts/jquery-1.11.1.min.js"></script>
<script src="Scripts/storybored_ajax.js"></script>

</body>

</html>