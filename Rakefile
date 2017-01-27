require 'fileutils'

# Create new portfolio items
desc "Creating a new portfolio item"
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

# http://albertogrespan.com/blog/rake-tasks-and-jekyll-posts/
namespace :draft do
  desc "Creating a new draft for post/entry"
  task :new do
    puts "What's the name for your next post?"
    @name = STDIN.gets.chomp
    @slug = "#{@name}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-')
    FileUtils.touch("_drafts/#{@slug}.md")
    open("_drafts/#{@slug}.md", 'a' ) do |file|
      file.puts "---"
      file.puts "layout: post"
      file.puts "title: #{@name}"
      file.puts "---"
    end
  end

  desc "copy draft to production post!"
  task :ready do
    puts "Posts in _drafts:"
    Dir.foreach("_drafts") do |fname|
      next if fname == '.' or fname == '..' or fname == '.keep'
      puts fname
    end
    puts "what's the name of the draft to post?"
    @post_name = STDIN.gets.chomp
    @post_date = Time.now.strftime("%F")
    FileUtils.mv("_drafts/#{@post_name}", "_posts/#{@post_name}")
    FileUtils.mv("_posts/#{@post_name}", "_posts/#{@post_date}-#{@post_name}")
    puts "Post copied and ready to deploy!"
  end
end
