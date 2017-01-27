require 'fileutils'

########################################################################
# Create new portfolio items
########################################################################
desc "Create a new portfolio item"
task :project do

  puts "What's the name of the portfolio project?"
  @name = STDIN.gets.chomp

  puts "Enter short description for the portfolio project"
  @desc = STDIN.gets.chomp

  puts "left/right layout for the project?"
  @layout = STDIN.gets.chomp

  # Slugify the name
  @slug = "#{@name}"
  @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
  @slug = @slug.downcase.strip.gsub(' ', '-')

  # Determine what order file should have based on files in the folder
  @order = Dir["_projects/*"].length + 1

  # Create the file
  FileUtils.touch("_projects/#{@slug}.md")

  # Open and write to the file
  open("_projects/#{@slug}.md", 'a' ) do |file|
    file.puts "---"
    file.puts "title: #{@name}"
    file.puts "desc: #{@desc}"
    file.puts "thumb-layout: #{@layout}"
    file.puts "order: #{@order}"
    file.puts "tags: #{@tagsArray}"
    file.puts "---"
  end
  puts "Portfolio project created. Extend the front matter with tags, images and such"
end

########################################################################
# Handle drafts
# Commands for creating drafts and publish them to _post folder
#  http://albertogrespan.com/blog/rake-tasks-and-jekyll-posts/
########################################################################

# namespace for drafts
namespace :draft do
  # Create new draft
  desc "Create a new draft for post/entry"
  task :new do
    puts "What's the name for your next post?"
    @name = STDIN.gets.chomp

    # slugify the input
    @slug = "#{@name}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-')

    # Create file in _draft folder
    FileUtils.touch("_drafts/#{@slug}.md")
    # Open newly created file and add front matter
    open("_drafts/#{@slug}.md", 'a' ) do |file|
      file.puts "---"
      file.puts "layout: post"
      file.puts "title: #{@name}"
      file.puts "---"
    end
  end

  # move a draft file to _post folder
  desc "move draft to production post!"
  task :ready do
    # loop though drafts in draft folder and display to the user
    puts "Posts in _drafts:"
    Dir.foreach("_drafts") do |fname|
      next if fname == '.' or fname == '..' or fname == '.keep'
      puts fname
    end

    puts "what's the name of the draft to post?"
    @post_name = STDIN.gets.chomp
    @post_date = Time.now.strftime("%F") # set post date from NOW

    # Move file from _drafts/ to _posts/ with correct naming convention for jekyll
    FileUtils.mv("_drafts/#{@post_name}", "_posts/#{@post_name}")
    FileUtils.mv("_posts/#{@post_name}", "_posts/#{@post_date}-#{@post_name}")
    puts "Post copied and ready to deploy!"
  end
end
